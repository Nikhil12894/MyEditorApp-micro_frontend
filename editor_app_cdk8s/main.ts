import { App, Chart, ChartProps } from "cdk8s";
import { Construct } from "constructs";
import {
  IntOrString,
  KubeDeployment,
  KubeService,
} from "./imports/k8s";
import { IMAGE_VERSION } from "./consents";
// interface MyIngressProps {
//   path: string;
//   host: string;
//   name: string;
//   port: number;
//   pathType?: string;
//   labels?: { [key: string]: string };
//   serviceName?: string;
// }

export class MyChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = {}) {
    super(scope, id, props);
    const label = {
      app: `${id}-app`,
      version: "1.0.0",
    };
    // define resources here
    new KubeDeployment(this, id, {
      metadata: {
        name: id,

        labels: {
          app: label.app,
          version: label.version,
          sha: "will_be_Replaced",
        },
      },
      spec: {
        replicas: 1,
        selector: {
          matchLabels: label,
        },
        template: {
          metadata: { labels: label },
          spec: {
            containers: [
              {
                name: `${id}-container`,
                image: `docker.io/nikhil12894/editor-app:${IMAGE_VERSION}`,
                ports: [{ containerPort: 80 }],
              },
            ],
          },
        },
      },
    });

    // create service
    const serviceName = `${id}-service`;
    new KubeService(this, serviceName, {
      metadata: {
        name: serviceName,
        labels: label,
      },
      spec: {
        type: "ClusterIP",
        ports: [
          {
            port: 80,
            protocol: "TCP",
            targetPort: IntOrString.fromNumber(80),
          },
        ],
        selector: label,
      },
    });
    // create ingress
    // const ingressName = `${id}-ingress`;
    // new KubeIngress(
    //   this,
    //   ingressName,
    //   this.getIngressSpec({
    //     path: "",
    //     host: "editor.explorewithnk.com",
    //     name: id,
    //     port: 80,
    //     serviceName: serviceName,
    //     pathType: "Prefix",
    //     labels: label,
    //   })
    // );
  }

  // getIngressSpec(ingressProps: MyIngressProps): KubeIngressProps {
  //   return {
  //     metadata: {
  //       name: `${ingressProps.name}-ingress`,
  //       namespace: "default",
  //       labels: ingressProps.labels,
  //       annotations: {
  //         "cert-manager.io/cluster-issuer": "lets-encrypt",
  //       },
  //     },
  //     spec: {
  //       ingressClassName: "public",
  //       rules: [
  //         {
  //           host: ingressProps.host,
  //           http: {
  //             paths: [
  //               {
  //                 path: `/${ingressProps.path}`,
  //                 backend: {
  //                   service: {
  //                     name: ingressProps.serviceName || ingressProps.name,
  //                     port: {
  //                       number: ingressProps.port,
  //                     },
  //                   },
  //                 },
  //                 pathType: ingressProps.pathType || "Prefix",
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //       tls: [
  //         {
  //           hosts: [ingressProps.host],
  //           secretName: `${ingressProps.name}-tls`,
  //         },
  //       ],
  //     },
  //   };
  // }
}

const app = new App();
new MyChart(app, "editor-root");
app.synth();
