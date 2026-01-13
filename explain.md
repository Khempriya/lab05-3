# Explain Code 5: JavaScript Fundamentals

## 01-variables.js - 6. Challenge: Create a Person Object

=== Challenge: Person Object ===<br>
Student object:<br>
{<br>
firstName: 'Alice',<br>
lastName: 'Smith',<br>
age: 20,<br>
gpa: 3.8,<br>
courses: [ 'HTML', 'CSS', 'JavaScript' ],<br>
isActive: true,<br>
getFullName: [Function: getFullName],<br>
getInfo: [Function: getInfo]<br>
}<br>
Full name: Alice Smith<br>
Info: Alice Smith, Age: 20, GPA: 3.8<br>
Courses: HTML, CSS, JavaScript<br>

### Explain

    โค้ดนี้เป็นการสร้างอ็อบเจกต์ student เพื่อเก็บข้อมูลของนักเรียน ชื่อ นามสกุล อายุ เกรด และรายวิชาที่ศึกษา โดยฟังก์ชัน getFullName ใช้รวมชื่อจริงและนามสกุลให้เป็นชื่อเต็ม ส่วนฟังก์ชัน getInfo ใช้แสดงชื่อเต็ม อายุ และเกรดเฉลี่ยรวมกันในรูปแบบเดียว

## 02-functions.js - 8. Returning Objects, 9. Function as Parameter (Callback)

Returning Objects:<br>
{<br>
firstName: 'John',<br>
lastName: 'Doe',<br>
age: 30,<br>
email: 'john.doe@example.com',<br>
getFullName: [Function: getFullName],<br>
getAge: [Function: getAge]
}<br>
Email: john.doe@example.com<br>
Full name: John Doe<br>

Callback Function:<br>
Original: [ 1, 2, 3, 4, 5 ]<br>
Doubled: [ 2, 4, 6, 8, 10 ]<br>
Squared: [ 1, 4, 9, 16, 25 ]<br>

### Explain

    ในส่วนของ Returning Objects ได้สร้างอ็อบเจกต์ผู้ใช้ใหม่ซึ่งเก็บข้อมูลชื่อ นามสกุล อายุ และอีเมล พร้อมทั้งมีฟังก์ชันสำหรับเรียกดูชื่อเต็มและอายุ จากนั้นแสดงค่าอีเมลและชื่อเต็ม

    ในส่วนของ Callback Function เป็นการนำอาร์เรย์ตัวเลขต้นฉบับมาประมวลผลผ่านฟังก์ชันโดยใช้ฟังก์ชันเดียวกันแต่เปลี่ยนรูปแบบการคำนวณ ทำให้ได้ผลลัพธ์ที่ได้มีค่าคูณสอง และกำลังสอง

## 03-control-flow.js - 5. Short-Circuit Evaluation, 7. Form Validation

Short-Circuit Evaluation:<br>
User name: John<br>
User profile: undefined<br>

Form Validation:<br>
Valid user: { isValid: true, errors: [] }<br>
Invalid user: {<br>
isValid: false,<br>
errors: [<br>
'Name must be at least 3 characters',<br>
'Valid email is required',<br>
'Must be 18 or older',<br>
'Password must be at least 6 characters',<br>
'Must agree to terms'<br>
]<br>
}<br>

### Explain

    ในส่วนของ Short-Circuit Evaluation ระบบจะตรวจสอบค่าเป็นลำดับ ชื่อผู้ใช้ถูกดึงมาจากอ็อบเจกต์ user และแสดงผลเป็น John ส่วนข้อมูลโปรไฟล์ไม่มีการกำหนดค่าไว้ จึงแสดงผลเป็น undefined โดยไม่ทำให้เกิดข้อผิดพลาดในการทำงาน

    ในส่วนของ Form Validation จะตรวจสอบข้อมูลที่ผู้ใช้กรอกตามเงื่อนไขที่กำหนด หากข้อมูลถูกต้องทั้งหมดจะแสดงผลว่าใช้งานได้ แต่หากข้อมูลไม่ถูกต้อง ระบบจะแจ้งข้อผิดพลาดแต่ละรายการตามเงื่อนไข

## 04-loops.js - 9. Chaining methods, 10. Challenge: Student Grades

Method chaining:<br>
Even numbers squared: 2²=4, 4²=16, 6²=36, 8²=64, 10²=100<br>
Average: 30<br>

Challenge: Student Analysis<br>
Student: [<br>
{ name: 'Alice', score: 95 },<br>
{ name: 'Bob', score: 75 },<br>
{ name: 'Charlie', score: 85 },<br>
{ name: 'Diana', score: 92 },<br>
{ name: 'Eve', score: 88 }<br>
]<br>
Names: Alice, Bob, Charlie, Diana, Eve<br>
High scorers: Alice (95), Charlie (85), Diana (92), Eve (88)<br>
Class average: 87.00<br>
Top scorer: Alice (undefined)<br>
Summary (sorted):<br>
Alice: 95 (A)<br>
Diana: 92 (A)<br>
Eve: 88 (B)<br>
Charlie: 85 (B)<br>
Bob: 75 (C)<br>

### Explain

    ในส่วนของ Method Chaining เป็นการใช้เมธอดหลายตัวต่อเนื่องกันเพื่อประมวลผลข้อมูลในอาร์เรย์ การกรองข้อมูล การคำนวณค่า และการหาค่าเฉลี่ย

    ในส่วนของ Student Analysis เป็นการนำข้อมูลนักเรียนมาวิเคราะห์ตามเงื่อนไขที่กำหนด โดยระบบจะแสดงรายชื่อนักเรียนทั้งหมด คัดกรองผู้ที่ได้คะแนนตามเกณฑ์ คำนวณคะแนนเฉลี่ยของห้อง และหาผู้ที่ได้คะแนนสูงสุด

## 05-integration.js - Activity 5: Integration - Quiz Application

🎯🎯 === QUIZ APPLICATION === 🎯🎯<br>

QUIZ RESULTS:<br>
────────────────────────────────────────────────────────────<br>
Q1: What is 5 + 3?<br>
Your answer: 7<br>
Correct answer: 8<br>
❌ WRONG<br>

Q2: What is the capital of Thailand?<br>
Your answer: Phuket<br>
Correct answer: Bangkok<br>
❌ WRONG<br>

Q3: What is the largest planet?<br>
Your answer: Saturn<br>
Correct answer: Jupiter<br>
❌ WRONG<br>

Q4: What is 2^8?<br>
Your answer: 128<br>
Correct answer: 256<br>
❌ WRONG<br>

Q5: Which is NOT a JavaScript data type?<br>
Your answer: boolean<br>
Correct answer: class<br>
❌ WRONG<br>

────────────────────────────────────────────────────────────<br>
FINAL SCORE: 0/5 (0.0%)<br>
GRADE: F<br>

FEEDBACK:<br>
💪💪 Keep practicing. You'll improve!<br>

📊📊 STATISTICS:<br>
Total questions: 5<br>
Correct: 0<br>
Incorrect: 5<br>
Success rate: 0.0%<br>

Answer breakdown:<br>
✅ Correct: 0<br>
❌ Incorrect: 5<br>

### Explain

    ในส่วนของ Quiz Application โดยระบบจะสุ่มคำตอบของผู้ใช้ ตรวจสอบความถูกต้องของแต่ละข้อ แสดงผลการตอบคำถาม คำนวณคะแนนรวม กำหนดเกรด และสรุปสถิติภาพรวมของแบบทดสอบเพื่อให้ผู้ใช้เห็นผลลัพธ์อย่างชัดเจน
