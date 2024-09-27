Atualização no comando do Fortio
Olá pessoal, tudo bem?


Com a atualização do kubectl para a versão 1.21, o parâmetro --generator do comando

```
$ kubectl run -it --generator=run-pod/v1 fortio --rm --image=fortio/fortio -- load -qps 800 -t 120s -c 70 "http://goserver-service/healthz"
passou a não ser mais suportado, apresentando o erro "Error: unknown flag: --generator".
```

Para a realização do teste, execute o comando sem este parâmetro, ficando da seguinte maneira:

```
$ kubectl run -it fortio --rm --image=fortio/fortio -- load -qps 800 -t 120s -c 70 "http://goserver-service/healthz"
```
Com isto, será possível ver os pods escalando no teste de stress.