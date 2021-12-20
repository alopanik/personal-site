# personal-site

Making the Flask application is hosting agnostic; I've hosted sites on a bare EC2 instance, however now I am experimenting with ElasticBeanstalk and Lightsail (where it's currently deployed). The domain alopanik.com is registered via Route 53; the rest is tidying up the DNS.

Ensure Docker and AWS CLI are installed.

```git clone https://github.com/alopanik/personal-site.git```

Run all commands locally.

- Step 1) Create the Flask application (you can modify 'welcome.html' under templates and the CSS and images under static)
- Step 2) Build the Docker container using the Dockerfile (```docker build -t flask-container .```)
- Step 3) Create a Lightsail container (```aws lightsail create-container-service --service-name flask-service --power small --scale 1```)
- Step 4) Push your Docker container to Lightsail (```aws lightsail push-container-image --service-name flask-service --label flask-container --image flask-container```)
- Step 5) Deploy config files (```aws lightsail create-container-service-deployment --service-name flask-service --containers file://containers.json --public-endpoint file://public-endpoint.json && aws lightsail get-container-services --service-name flask-service```)
- Step 6) The URL returned is your website.

DNS and domain routing require additional steps. Note: leaving on port 5000 is OK (though feel free to change to 80 or 443). I registered my domain via Route 53.
- Step 1) Create a TLS certificate for the container service based on the registered domain name.
- Step 2) Validate the TLS certificate. In Route 53, create a hosted zone record (CNAME) with the name and value from above. Wait for validation in Lightsail.
- Step 3) Attach the certificate to your container service.
- Step 4) Modify ```change-resource-record-sets.json``` where ```name``` is the domain, ```HostedZoneId``` is the zone ID of the Lightsail container, and ```DNSName``` is the public domain of the container service. 
- Step 5) Use AWS CLI to add an alias record for the Lightsail container service to the DNS zone in Route 53 (```aws route53 change-resource-record-sets --hosted-zone-id hostedZoneId --change-batch file://./change-resource-record-sets.json``` where ```hostedZoneId``` is a placeholder for the Route 53 hosted zone ID. 
- Step 6) Ensure the ```A``` type hosted zone record appears in Route 53 and wait a few minutes for it to take effect.
