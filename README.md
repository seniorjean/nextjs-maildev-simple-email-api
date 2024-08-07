
## RUN WITH DOCKER
```bash
docker compose up --build
```

## RUN WITHOUT DOCKER
```bash
npm run install
# then
npm run dev
```
<hr>
<br>
<h3>mail templqte</h3>

[http://localhost:3000/mailtemplate](http://localhost:3000) 

<br/>
<h3>mail dev backend</h3>

[http://localhost:1080](http://localhost:1080)

<br/>
<h3>mail dev smtp</h3>

●host: `maildev`

● username:

● password:

● port: `1025`

### Example with node mailer

```
    const transporter = nodemailer.createTransport({
    host: 'maildev',
    port: 1025,
    ignoreTLS: true,
    });
    
    const mailOptions = {
        from: 'from@email.com',
        to: email,
        subject: 'New Contact',
        html: emailHtml,
    };
```


