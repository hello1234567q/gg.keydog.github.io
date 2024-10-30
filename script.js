let key = "key_doggay_k=0k_2N2'Ty(QxSBj@/"; // Thay đổi key của bạn ở đây
const linkvertiseUrl = "YOUR_LINKVERTISE_URL"; // URL xác minh cho Linkvertise
const lootLabsUrl = "YOUR_LOOTLABS_URL"; // URL xác minh cho Loot Labs

function verifyCheckpoint(checkpoint) {
    let messageDiv = document.getElementById('message');
    let resultDiv = document.getElementById('result');
    messageDiv.innerHTML = ""; // Xóa thông báo trước đó
    resultDiv.innerHTML = "Verifying... Please wait.";

    setTimeout(() => {
        if (checkpoint === 1 || checkpoint === 2) {
            // Gửi yêu cầu tới URL xác minh Linkvertise
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

                    if (checkpoint === 1) {
                        resultDiv.innerHTML = "Checkpoint 1 (Linkvertise) verified! Proceeding to Checkpoint 2.";
                        document.getElementById('checkpoint2').style.display = "block";
                    } else if (checkpoint === 2) {
                        resultDiv.innerHTML = "Checkpoint 2 (Linkvertise) verified! Proceeding to Checkpoint 3.";
                        document.getElementById('checkpoint3').style.display = "block";
                    }
                })
                .catch(error => {
                    messageDiv.innerHTML = error.message;
                    messageDiv.className = "message error";
                });
        } else if (checkpoint === 3) {
            // Gửi yêu cầu tới URL xác minh Loot Labs
            fetch(lootLabsUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Verification failed for Loot Labs.");
                    }
                    return response.json();
                })
                .then(data => {
                    resultDiv.innerHTML = `Checkpoint 3 (Loot Labs) verified! Here is your key: ${key} and it can be used forever until admin update `;
                    messageDiv.innerHTML = ""; // Xóa thông báo lỗi
                })
                .catch(error => {
                    messageDiv.innerHTML = error.message;
                    messageDiv.className = "message error";
                });
        }
    }, 3000); // Thời gian chờ 3000ms (3 giây)
}