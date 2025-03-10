import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 5 }, // Ramp up to 5 users
    { duration: '30s', target: 5 }, // Maintain 5 users
    { duration: '30s', target: 0 },  // Ramp down to 0 users
  ],
};

export default function () {
  // Dummy data is used for performance tests to ensure privacy and security.
  let res = http.post('https://app.careerflow.ai/api/resume', JSON.stringify({
    fullName: 'Rajveer Singh Rathore',
    contactInfo: 'rajvir1c1421@gmail.com.com',
    workExperience: '5 years in Software Development',
    education: 'B.Sc. in Computer Science'
  }), {
    headers: { 'Content-Type': 'application/json' },
  });

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is acceptable': (r) => r.timings.duration < 800,
  });
  
  sleep(1);
}
