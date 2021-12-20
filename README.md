# personal-site

Making the Flask application is hosting agnostic; I've hosted sites on a bare EC2 instance, however now I am experimenting with ElasticBeanstalk and Lightsail (where it's currently deployed). The domain alopanik.com is registered via Route 53; the rest is tidying up the DNS.

Ensure Docker and AWS CLI are installed.

```
git clone https://github.com/alopanik/personal-site.git
```

Run all commands locally.

- Step 1) Create the Flask application (you can modify 'welcome.html' under templates and the CSS and images under static)
- Step 2) Build the Docker container using the Dockerfile (```docker build -t flask-container .```)
- Step 3) Create a Lightsail container (```aws lightsail create-container-service --service-name flask-service --power small --scale 1```)
- Step 4) Push your Docker container to Lightsail (```aws lightsail push-container-image --service-name flask-service --label flask-container --image flask-container```)
- Step 5) Deploy config files (```aws lightsail create-container-service-deployment --service-name flask-service --containers file://containers.json --public-endpoint file://public-endpoint.json && aws lightsail get-container-services --service-name flask-service```)
- Step 6) The URL returned is your website. DNS and domain routing require additional steps.

