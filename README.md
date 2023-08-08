Before running the project:

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.0/deploy/static/provider/cloud/deploy.yaml

kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

in hosts file => 127.0.0.1 ticketing.dev

skaffold dev

Usefull commands:

kubectl get secrets

kubectl get pods

kubectl delete pod pod_id

namespace => a set of objects
kubectl get namespace

kubectl get services -n namespace_name

kubectl apply -f [deployment_name].yaml

change code => build docker image => push docker image => update the pod
update the pod => kubectl rollout restart deployment [deployment_name]

kubctle get deployments

Usefull docker commmands:

docker build -t image_tag .
docker run -dp targetPort:port image_tag
