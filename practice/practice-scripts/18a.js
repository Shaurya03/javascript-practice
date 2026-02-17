//18a
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev/greeting');
xhr.send();

//18b
fetch(
  'https://supersimplebackend.dev/greeting'
).then((response) => {
  return response.text();
}).then((text) => {
  console.log(text);
});

//18c
async function getGreeting() {
  const response = await fetch('https://supersimplebackend.dev/greeting');
  const text = await response.text();
  console.log(text);
}

getGreeting();

//18d
async function postGreeting() {
  const response = await fetch('https://supersimplebackend.dev/greeting', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Shaurya'
    })
  });

  const text = await response.text();
  console.log(text);
}

postGreeting();

//18e
fetch(
  'https://amazon.com'
).then((response) => {
  return response.text();
}).then((text) => {
  console.log(text);
}).catch((error) => {             //18f
  console.log('CORS error. Your request was blocked by the backend');
});

//18g
async function postGreetings() {
  try {
    const response = await fetch('https://supersimplebackend.dev/greeting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status >= 400) {
      throw response;
    }

    const text = await response.text();
    console.log(text);

  } catch (error) {
    if (error.status === 400) {
      const errorMessage = await error.json();
      console.log(errorMessage);
    } else {
      console.log('Network error. Please try again later.');
    }
  }
}

postGreetings();