// Constants
// This would need to be more reactive to environment variables so different settings can be changed during deploy
const prod = {
    API_URL: "http://fulls-LoadB-16QUR6NDC2L03-1254964837.eu-west-2.elb.amazonaws.com:8080",
};

const dev = {
    API_URL: "http://localhost:8888"
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
