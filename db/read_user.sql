select * from users
where auth0_id = $1
limit 1;