import AppConfig from '../../config/app_config';
import * as jwt from 'jsonwebtoken';

export function signToken(
    id: string,
    expires: string
): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
        jwt.sign(
            {
                sub: id,
                iat: Date.now()
            },
            AppConfig.application.secret,
            {
                expiresIn: expires
            },
            (err, token) => {
                if (err) {
                    reject(err);
                }
                resolve(token);
            }
        );
    });
}

export function verifyToken(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
        jwt.verify(token, AppConfig.application.secret, (err, decoded) => {
            if (err) {
                reject(err);
            }
            resolve(decoded);
        });
    });
}
