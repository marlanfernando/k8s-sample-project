# K8s deployment sample
This is the same example we used previously, but using kubernetes to deploy the services.

In this example as the proxy server we use ingress, this will be the main difference between the previous example and in here.

all the necessory comments are in the yaml files related to k8s 

# diff between cluster ip and nodePort
    Node port basically used to development and testing purpose, and the IP can be accessed outside from the cluster, the cluster ip on the other hand is only visible inside the cluster and dirrect access from outside is prohibitted

# Persistence volume claim - Access modes

1. ReadWriteOnce : can used by a single node
2. ReadOnlyMany: multiple nodes can read
3. ReadWriteMany: can read and written by many nodes

# Persistent volume claims used in this example
    volumes:
        - name: postgres-storage
          persistentVolumeClaim:
            claimName: database-persistent-volume-claim 

in here the claim name is defined in `database-persistent-volume-claim` file go through the file and read thorugh the volume claims in kubernetes

# creating a secret

`kubectl create secret generic <secret_name> --from-literal key=value`

    create - imperetive command for creating a object

    secret - type of object

    generic - type of secret, other options [ docker_registry, tls]

    secret_name - name of secret, this will be used in pod config

    from-literal - will add the secret from this command not from the file?

# Ingress