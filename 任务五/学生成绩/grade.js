    var score;
    var grades;
    // 分级函数
    function grade() {
        score = document.getElementById("score").value;
        console.log(score);
        console.log(typeof score);
        if (!/^[0-9]*$/.test(score)) {
            alert("请输入数字！");
            document.getElementById("grades").innerHTML = "成绩为：";
            return;
        }

        if (score.trim() == '') {
            alert("请输入0-100之间的数字！");
            document.getElementById("grades").innerHTML = "成绩为：";
            return;
        }
        else {

            switch (true) {
                case score <= 100 && score >= 90:
                    grades = 1;
                    break;
                case score <= 89 && score >= 80:
                    grades = 2;
                    break;
                case score <= 79 && score >= 70:
                    grades = 3;
                    break;
                case score <= 69 && score >= 60:
                    grades = 4;
                    break;
                case score <= 59 && score >= 50:
                    grades = 5;
                    break;
                case score <= 49 && score >= 40:
                    grades = 6;
                    break;
                case score <= 39 && score >= 30:
                    grades = 7;
                    break;
                case score <= 29 && score >= 20:
                    grades = 8;
                    break;
                case score <= 19 && score >= 10:
                    grades = 9;
                    break;
                case score <= 9 && score >= 0:
                    grades = 10;
                    break;
                default:
                    alert("请输入0-100之间的数字！");
                    return;
                    break;
            }

        }
        document.getElementById("grades").innerHTML = "成绩为：" + grades + "等生";
    }