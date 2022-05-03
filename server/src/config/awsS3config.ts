// import { Injectable } from "@nestjs/common";
// import { ConfigService } from "@nestjs/config";
// import { MulterOptionsFactory } from "@nestjs/platform-express";
// import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
// import * as AWS from 'aws-sdk';
// import * as MulterS3 from 'multer-s3';

// @Injectable()
// export class awsS3config implements MulterOptionsFactory {
//     private s3: any;
//     constructor(
//         private readonly configService: ConfigService,
//     ) {
//         this.s3 = new AWS.S3();
//         AWS.config.update({
//             accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
//             secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
//             region: configService.get('AWS_REGION'),
//         });
//     }

//     createMulterOptions(): MulterOptions | Promise<MulterOptions> {
//         const bucket: string = this.configService.get('AWS_S3_BUCKET_NAME');
//         const acl: string = 'public-read';

//         const multerS3Storage = MulterS3({
//             s3: this.s3,
//             bucket,
//             acl,
//             metadata: (req, file, cb) => {
//                 cb(null, {fieldName: file.fieldname});
//             },
//             key: (req, file, cb) => {
//                 const timeStamp = Date.now();
//                 const fileName = timeStamp + file.originalname;
//                 cb(null, `${fileName}`);
//             },
//         });
//         return {
//             storage: multerS3Storage,
//         };
//     }
// }