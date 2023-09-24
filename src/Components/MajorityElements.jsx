import React from "react";
function findMajorityElement(arr) {
  let candidate,
    count = 0;

  // Phase 1: Find a candidate for the majority element
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else if (candidate === arr[i]) {
      count++;
    } else {
      count--;
    }
  }

  // Phase 2: Verify if the candidate is indeed the majority element
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return candidate;
  } else {
    return null; // No majority element found
  }
}

const inputArray = [1, 2, 2, 3, 4, 2, 2];
const majorityElement = findMajorityElement(inputArray);

if (majorityElement !== null) {
  console.log(`The majority element is: ${majorityElement}`);
} else {
  console.log("No majority element found in the array.");
}

function MajorityElements() {
  return <div>MajorityElements</div>;
}

export default MajorityElements;
