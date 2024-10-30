let key = "key_doggay_k=0k_2N2'Ty(QxSBj@/"; // Thay đổi key của bạn ở đây
const linkvertiseUrl = "https://link-hub.net/1240231/dog-key-checkpoint-1"; // URL xác minh cho Checkpoint 1
const mbost = "https://mboost.me/a/dhz"; // URL xác minh cho Checkpoint 2
const lootLabsUrl = "YOUR_LOOTLABS_URL"; // URL xác minh cho Loot Labs

function verifyCheckpoint(checkpoint) {
    let messageDiv = document.getElementById('message');
    let resultDiv = document.getElementById('result');
    messageDiv.innerHTML = ""; // Xóa thông báo trước đó
    resultDiv.innerHTML = "Verifying... Please wait.";

    setTimeout(() => {
        if (checkpoint === 1) {
            verifyCheckpoint1(messageDiv, resultDiv);
        } else if (checkpoint === 2) {
            verifyCheckpoint2(messageDiv, resultDiv);
        } else if (checkpoint === 3) {
            verifyCheckpoint3(messageDiv, resultDiv);
        }
    }, 3000); // Thời gian chờ 3000ms (3 giây)
}

function verifyCheckpoint1(messageDiv, resultDiv) {
    // Gửi yêu cầu tới URL xác minh Linkvertise cho Checkpoint 1
    fetch(linkvertiseUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Verification failed for Linkvertise.");
            }
            return response.json();
        })
        .then(data => {
            if (Math.random() < 0.5) { // Giả lập việc có bypass
                messageDiv.innerHTML = "Bypass detected! Cannot proceed.";
                messageDiv.className = "message error";
                return;
            }

            resultDiv.innerHTML = "Checkpoint 1 (Linkvertise) verified! Proceeding to Checkpoint 2.";
            document.getElementById('checkpoint2').style.display = "block";
        })
        .catch(error => {
            messageDiv.innerHTML = error.message;
            messageDiv.className = "message error";
        });
}

function verifyCheckpoint2(messageDiv, resultDiv) {
    // Gửi yêu cầu tới URL xác minh Linkvertise cho Checkpoint 2
    fetch(mbost)
        .then(response => {
            if (!response.ok) {
                throw new Error("Verification failed for Checkpoint 2.");
            }
            return response.json();
        })
        .then(data => {
            resultDiv.innerHTML = "Checkpoint 2 (Linkvertise) verified! Proceeding to Checkpoint 3.";
            document.getElementById('checkpoint3').style.display = "block";
        })
        .catch(error => {
            messageDiv.innerHTML = error.message;
            messageDiv.className = "message error";
        });
}

function verifyCheckpoint3(messageDiv, resultDiv) {
    // Gửi yêu cầu tới URL xác minh Loot Labs
    fetch(lootLabsUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Verification failed for Loot Labs.");
            }
            return response.json();
        })
        .then(data => {
            resultDiv.innerHTML = `Checkpoint 3 (Loot Labs) verified! Here is your key: ${key} and it can be used forever until admin updates.`;
            messageDiv.innerHTML = ""; // Xóa thông báo lỗi
        })
        .catch(error => {
            messageDiv.innerHTML = error.message;
            messageDiv.className = "message error";
        });
            }
