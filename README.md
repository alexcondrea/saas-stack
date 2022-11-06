## SSL Certificates

### Let's encrypt with certbot

If you need to set up a certificate with certbot on your server and you have a domain available
follow this tutorial here.
You should be able to just uncomment the lines in `docker-compose.yml`
and in `nginx/default.conf` while also commenting the lines including the
self generated certificate.

https://mindsers.blog/post/https-using-nginx-certbot-docker/

Don't forget to set the `NGINX_SERVER_NAME` environment variable.

```bash
$ docker compose run --rm  certbot certonly --webroot --webroot-path /var/www/certbot/ -d example.org
```

To renew the ssl certificates
```bash
$ docker compose run --rm certbot renew
```
### Local certificates

Run this script for your local development environment

```bash
openssl req -x509 -out .ssl/localhost.crt -keyout .ssl/localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```
