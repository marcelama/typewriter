const sentence = "hello there from home";

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
} process.stdout.write('\n');




