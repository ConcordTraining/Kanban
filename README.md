
Hi,

I have seen a few similar issues but my scenario did not seem quite the same.

Currently we have Consul deployed as a container to a Docker Datacenter cluster.  We have built Java microservices using Spring Cloud Consul framework.  The applications register with Consul just fine:

Registering service with consul: NewService{id='cit-user-profile-gateway-e5899ed3191f9cdd8c94fe9a5427e49e', name='cit-user-profile-gateway', tags=[], address='10.0.0.3', port=8080, enableTagOverride=null, check=Check{script='null', interval=10s, ttl=null, http=http://10.0.0.3:8080/health, tcp=null, timeout=null, deregisterCriticalServiceAfter=null, tlsSkipVerify=null}, checks=null}
