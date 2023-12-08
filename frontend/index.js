function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    let navMenu = document.createElement('nav')
    function buildNavItem(link){
      let menuItem = document.createElement('a')
      menuItem.textContent = link.textContent
      menuItem.href = link.href
      menuItem.title = link.title
      navMenu.appendChild(menuItem)
    }
    links.forEach(buildNavItem)
    return navMenu
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    let learnerCard = document.createElement('div')
    let favoriteLanguage = languages.find(({id}) => id === learner.favLanguage)
    learnerCard.classList.add('learner-card')

    let name = document.createElement('p')
    name.textContent = learner.fullName
    learnerCard.appendChild(name)

    let learnerId = document.createElement('p')
    learnerId.textContent = `Learner ID: ${learner.id}`
    learnerCard.appendChild(learnerId)

    let dateOfBirth = document.createElement('p')
    dateOfBirth.textContent = `Date of Birth: ${learner.dateOfBirth}`
    learnerCard.appendChild(dateOfBirth)

    let favLanguage = document.createElement('p')
    favLanguage.textContent = `Favorite Language: ${favoriteLanguage.name}`
    learnerCard.appendChild(favLanguage)

    learnerCard.addEventListener('click', evt => {
      if (document.querySelector('div.learner-card.active')){
        let currentActive = document.querySelector('div.learner-card.active')
        currentActive.classList.remove('active')
      }
      if (evt.target.tagName === 'P'){
        evt.target.parentElement.classList.add('active')
      } else {
        evt.target.classList.add('active')
      }
      
    })

    return learnerCard
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    for (let i = 0; i < learners.length; i++){
      document.querySelector('section').appendChild(buildLearnerCard(learners[i], languages))
    }
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    let footer = document.createElement('footer')
    let companyInfo = document.createElement('div')
    //----
    companyInfo.classList.add('company-info')
    
    let companyName = document.createElement('p')
    companyName.textContent = footerData.companyName
    companyName.classList.add('company-name')
    companyInfo.appendChild(companyName)

    let address = document.createElement('p')
    address.textContent = footerData.address
    address.classList.add('address')
    companyInfo.appendChild(address)

    let contactEmail = document.createElement('p')
    contactEmail.classList.add('contact-email')
    contactEmail.innerHTML = `Email: <a href = mailto:${footerData.contactEmail}>${footerData.contactEmail}</a>`
    companyInfo.appendChild(contactEmail)

    footer.appendChild(companyInfo)
    //----
    let socialMedia = document.createElement('div')
    
    let twitter = document.createElement('a')
    twitter.href = footerData.socialMedia.twitter
    twitter.textContent = 'Twitter'
    socialMedia.appendChild(twitter)

    let facebook = document.createElement('a')
    facebook.href = footerData.socialMedia.facebook
    facebook.textContent = 'Facebook'
    socialMedia.appendChild(facebook)

    let instagram = document.createElement('a')
    instagram.href = footerData.socialMedia.instagram
    instagram.textContent = 'Instagram'
    socialMedia.appendChild(instagram)

    footer.appendChild(socialMedia)
    //----
    let copyright = "© " + footerData.companyName + " " + new Date().getFullYear()
    let copyrightElement = document.createElement('div')
    copyrightElement.textContent = copyright.toUpperCase()
    footer.appendChild(copyrightElement)

    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
