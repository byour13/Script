body =
$response.body.replace(/vip_type":"\"/g,'vip_type":"s\"').replace(/svip_given":\d+/g,'svip_given":365').replace(/is_vip":\w+/g,'is_vip":true').replace(/vip":\{[^\}]+\}/g,'vip":{"enabled":true,"is_auto_renewal":false,"auto_renewal_type":"\","svip_auto_renewal_type":"\","svip_expired_at":1969752820,"expired_at":0}').replace(/svip_expired_at":\d+/g,'svip_expired_at":1969752820')
$done({body});