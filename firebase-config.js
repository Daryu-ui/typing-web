/*  ★ 이 파일은 내 Firebase 프로젝트 설정값입니다. ★
 *  (이 키들은 원래 웹에 공개되는 값이라 GitHub에 올라가도 안전합니다.
 *   실제 보안은 Firebase 로그인 + Firestore 규칙이 담당합니다.)
 */
window.APP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyBRJ4AiUinIeVjqckT31BYGcUfRmT1_LrM",
    authDomain: "english-typing-contest.firebaseapp.com",
    projectId: "english-typing-contest",
    storageBucket: "english-typing-contest.firebasestorage.app",
    messagingSenderId: "90923993795",
    appId: "1:90923993795:web:8620c358601a1a4407b076"
  },

  // 이 도메인의 구글 계정만 로그인 허용 (학교 워크스페이스 도메인).
  // 모두 허용하려면 "" (빈 문자열)로 두세요.
  allowedDomain: "sdjhs.djsch.kr",

  // 총관리자(편집 권한) 이메일 — 여러 명 가능
  adminEmails: ["leekt312@sdjhs.djsch.kr"],

  // 교사로 표시할 이메일(선택). 여기 없으면 학생으로 표시됩니다.
  teacherEmails: ["leekt312@sdjhs.djsch.kr"],

  // 순위 등재 기준(난이도별 도전 횟수)
  qualifyCount: 3
};
