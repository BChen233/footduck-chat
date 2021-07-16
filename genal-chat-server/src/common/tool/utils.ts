/**
 * 群名/用户名校验
 * @param name
 */
export function nameVerify(name: string): boolean {
  if (name.length === 0) {
    return false;
  }
  return true;
}

/**
 * 密码校验
 * @param password
 */
export function passwordVerify(password: string): boolean {
    const passwordReg = /^[0-9A-Za-z._~!@#$^&*]{6,20}$/gis;
    if (password.length === 0) {
        return false;
    }
    if (!passwordReg.test(password)) {
        return false;
    }
  return true;
}

export function getClientIp(req) {
  var ip = req.headers['x-forwarded-for'] ||
      req.ip ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress || '';
  if(ip.split(',').length>0){
      ip = ip.split(',')[0]
  }
  ip = ip.substr(ip.lastIndexOf(':')+1,ip.length);
  return ip;  
};