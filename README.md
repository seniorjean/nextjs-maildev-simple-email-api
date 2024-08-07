
## RUN WITH DOCKER
```bash
docker compose up --build
```

## RUN WITHOUT DOCKER
```bash
npm run install
```
```bash
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

## Test the api

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/20726569-626456c6-231b-4f38-82ac-bfde97981479?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D20726569-626456c6-231b-4f38-82ac-bfde97981479%26entityType%3Dcollection%26workspaceId%3De638c00e-154b-4000-85fe-58a1f52e21c2)

