import App from "@/app";
import IndexRoute from "@/routes/index.route";

const server = new App([new IndexRoute()]);

server.listen();
