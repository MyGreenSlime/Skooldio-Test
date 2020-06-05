ใน program นี้ แยกออกมาเป็น file หลักๆ ทั้งหมด 4 files ครับ
-   mainEncode.js ไฟล์หลักสำหรับการรัน Program ครับ
-   mainCompare.js ไฟล์เสริมสำหรับการรัน Program แบบ ต้องการเทียบกับ String เดิม
-   converter.js ไฟล์นี้ รวม logic ของ ส่วน Encode แบบ "Run length Encoded"
-   unitTest.test.js  ไฟล์นี้ไว้ใช้สำหรับ Test ครับ

command for Run มีทั้งหมด 3 คำสั่งครับ
- npm run encode arg1 arg2 arg3 ... ใช้สำหรับใช้งานprogram ครับ โดยสามารถรับ input ทั้งหมดกี่ตัวก็ได้
- npm run compare arg1 arg2 arg3 ... ใช้สำหรับใช้งานprogramแบบ ต้องการเทียบกับ String เดิม ครับ โดยสามารถรับ input ทั้งหมดกี่ตัวก็ได้
- npm run test ใช้สำหรับ รัน unit test ครับ

new features added
- รับ กี่ args ก็ได้โดยใช้การเว้นวรรคในการแบ่ง เช่น npm run encode don ruksachai onglaor เป็นต้น 
- เพิ่ม Error แจ้งว่าใน text ที่รับเข้ามานั้น มีตัวเลขผสมอยู่ตัว เช่น "Error :"dd44" includes number, Can't encode it"

to do features
- เพิ่ม Decoder เข้ามาด้วยสำหรับการถอดข้อความ ที่ถูก Encoder 
- หลังจาก เพิ่ม function Decoder ก็เขียน unitest สำหรับ Decoder

