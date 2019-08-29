require('../assets/stylesheets/styles.scss');
const myfonc = () => {
    console.log('Dans my fonc');
    let coco = "J'apprends Webpack !";
    let fifi = "J'apprend Webpack !";
    coco = coco + " : Test OK!"
    return "Test ok : " + coco;
}

export default myfonc
console.log('Hors my fonc', myfonc());
document.write("Je debute avec Webpack !" + myfonc());