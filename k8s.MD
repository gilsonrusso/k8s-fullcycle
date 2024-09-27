## commads k8s

- Observar o hpa
```md
# watch -n1 kubectl get hpa
```
- Aplicar arquivos de servicos
```md
*  kubectl apply -f k8s/deployment.yaml
*  kubectl apply -f k8s/service.yaml
*  kubectl apply -f k8s/secret.yaml
*  kubectl apply -f k8s/hpa.yaml
*  kubectl apply -f k8s/configmap-members.yaml
*  kubectl apply -f k8s/metrics-services.yaml
*  kubectl apply -f k8s/pvc.yaml
```

- Principais comandos kubectl
```md
*  kubectl get pods
*  kubectl get nodes
*  kubectl get services
*  kubectl get apiservices
*  kubectl get storageclass
*  kubectl get pvc

*  kubectl delete deployment nodeserver
*  kubectl top pod nodeserver-7648c5665c-7jcck
*  kubectl describe pod nodeserver-86cfcd9958-d8cgf 

*  kubectl config get-contexts
*  kubectl config use-contexts kind-fullcly

```
- Principais comandos kind
```md
*  kind create cluster --config k8s/kind.yaml --name=fullcycle 
```

- Adicionar o metrics services no kink
```md
*  wget https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

aplicar no spec do deploymente
  spec:
      containers:
      - args:
        - --kubelet-insecure-tls
```

- Port foward
```
kubectl port-forward pods/nodeserver-86cfcd9958-d8cgf  9000:5000 -n default
```

- Transformar base64
```
 echo "123456" | base64 -- base decoder
```

