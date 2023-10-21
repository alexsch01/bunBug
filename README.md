**bun repl -e "require('bunBug')(8080); await new Promise(r => setTimeout(r, 10000000))"**

`<body>Hello World</body>`

```
HTTP/1.1 200 OK
***content-type: text/plain;charset=utf-8***
Date: Sat, 21 Oct 2023 15:39:48 GMT
Content-Length: 24
```

---

**node -e "require('bunBug')(8081)"**

`Hello World`

```
HTTP/1.1 200 OK
Date: Sat, 21 Oct 2023 15:40:28 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 24
```
