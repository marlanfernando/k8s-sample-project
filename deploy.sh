docker build -t marlanfer/multi-client:latest -t marlanfer/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t marlanfer/multi-server:latest -t marlanfer/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t marlanfer/multi-worker:latest -t marlanfer/multi-worker:$SHA -f ./worker/Dockerfile ./worker

docker push marlanfer/multi-client:latest
docker push marlanfer/multi-server:latest
docker push marlanfer/multi-worker:latest

docker push marlanfer/multi-client:$SHA
docker push marlanfer/multi-server:$SHA
docker push marlanfer/multi-worker:$SHA

kubectl apply -f k8s

kubectl set image deployments/server-deployment server=marlanfer/multi-server:$SHA
kubectl set image deployments/client-deployment client=marlanfer/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=marlanfer/multi-worker:$SHA

