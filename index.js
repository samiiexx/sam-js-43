// Copyright 2021 sfchi
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelectorAll('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')

let selectedRating = 'Satisfied'

// Event Bubbling
ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.addEventListener('active')

        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}