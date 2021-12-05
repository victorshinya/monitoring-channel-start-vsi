const { IamAuthenticator } = require("ibm-vpc/auth");
const vpcV1 = require("ibm-vpc/vpc/v1");

async function main(params) {
	const service = {
		authenticator: new IamAuthenticator({
			apikey: params.apikey,
		}),
		serviceUrl: "https://us-south.iaas.cloud.ibm.com/v1",
	};
	const vpcService = new vpcV1(service);
	const response = await vpcService.createInstanceAction({
		instanceId: params.instanceId,
		type: "start",
	});
	console.log(response);
	return response;
}

exports.main = main;
