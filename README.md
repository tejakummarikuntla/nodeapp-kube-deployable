### Run
`npm start`

### Test
`npm run test` 

### Start Minikube
1. `minikube status`
2. `minikube start`

### Docker:
https://hub.docker.com/repository/docker/tejakummarikuntla/nodeapp

1. `docker build tejakummarikuntla/nodeapp`

2. `docker run -d -p 3000:3000 tejakummarikuntla/nodeapp`

3. `Vist localhost:3000`

### Kubernetes

Handy commands:
1. `kubectl get deployments -  gets deployments`
2. `kubectl get pods - gets pods`
3. `kubectl get svc - gets services`
  
1. `kubectl delete deployment <deployment_name>`
2. `kubectl delete pod <deployment_name>`
3. `kubectl delete svs <service_name>`

### Create deployment and service
`kubectl apply -f deployments.yml`
`kubectl apply -f service.yml`

### List services
1. `kubectl get svc`
2. `minikube service <service_name>`
