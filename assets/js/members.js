jQuery(function($) {
$(document).ready(function(){
async function getData() {
    $('#bodyText').hide();
    const url = 'https://thetatautech.github.io/Data/ttrd_data.json';
    const response = await fetch(url);
    const data = await response.json();
    const members = data.members;
    const memberArray = Object.keys(members);
    const sampleClass = $('#greek_class');
    sampleClass.hide();
    const cardContainer = $("#cardsContainer");
    const clonedClassArray = [];
    const sampleMember = $('#sampleMember');
    const sampleEboard = $('#sampleOfficer');
    const sampleChair = $('#sampleChair');
    sampleMember.hide()
    sampleEboard.hide()
    sampleChair.hide()
    const memberContainer = $("#classSec");
    const eboardContainer = $('#officerSec');
    const chairContainer = $('#chairSec');
    memberContainer.hide();
    eboardContainer.hide();
    chairContainer.hide();
    const eboardArray = [];
    const chairArray = [];
    for (let i = 0; i < memberArray.length; i++){
        const clonedClass = sampleClass.clone();//clone
        clonedClass.css("opacity","1");
        clonedClass.removeAttr("id");
        clonedClassArray.push(clonedClass);
        cardContainer.append(clonedClassArray);
        const heading = clonedClass.find("#classHead");
        heading.text(memberArray[i]);
        const clonedContainer = memberContainer.clone();
        clonedContainer.removeAttr('id');
        clonedContainer.show();
        let classMembers = members[memberArray[i]];
        const clonedMemberArray = [];
        for (let j = 0; j < classMembers.length; j++) {
            const clonedMember = sampleMember.clone();
            clonedMember.css("opacity", "1");
            clonedMember.removeAttr("id");
            clonedMember.show();
            const name = clonedMember.find("#name");
            const major = clonedMember.find("#major");
            const image = clonedMember.find("#memberPic")
            const photoCredit = clonedMember.find("#photoCredit");
            const email = clonedMember.find("#email");
            const resume = clonedMember.find("#resume");
            const linkedin = clonedMember.find("#linkedin");
            let nameText = classMembers[j].name;
            let majorText = classMembers[j].major;
            let imageUrl = classMembers[j].image;
            let creditName = classMembers[j].credit;
            let emailText = classMembers[j].email;
            let resumeUrl = classMembers[j].resume;
            let linkedinUrl = classMembers[j].linkedin;
            let position = classMembers[j].position;
            let eboard = classMembers[j].eboard;
            name.text(nameText);
            major.text(majorText);
            if(imageUrl){
                image.attr("src",imageUrl);
            }
            if(photoCredit){
                photoCredit.text(creditName);
            }
            if(emailText){
                email.click(function() {
                    window.location.href = "mailto:" + emailText;
                });
            }
            if(!emailText){
                email.hide();
            }
            if(resumeUrl){
                resume.click(function() {
                    window.location.href = resumeUrl;
                });
            }
            if(!resumeUrl){
                resume.hide();
            }
            if(linkedinUrl){
                linkedin.click(function() {
                    window.location.href = linkedinUrl;
                });
            }
            if(!linkedinUrl){
                linkedin.hide();
            }
            if(!emailText && !resumeUrl && !linkedinUrl){
                name.css('margin-top','15px');
            }
            if(position){
                chairArray.push(classMembers[j]);
            }
            if(eboard){
                eboardArray.push(classMembers[j]);
            }
            clonedMemberArray.push(clonedMember);
        }
        clonedContainer.append(clonedMemberArray);
        clonedClass.append(clonedContainer);
        clonedClass.show();
    }
    const clonedEboardArray = [];
    for (let k = 0; k < eboardArray.length; k++){
        const clonedEboard = sampleEboard.clone();
        clonedEboard.css("opacity", "1");
        clonedEboard.removeAttr("id");
        clonedEboard.show();
        clonedEboard.css("height","325px");
        const name = clonedEboard.find("#name");
        const major = clonedEboard.find("#major");
        const image = clonedEboard.find("#memberPic")
        const photoCredit = clonedEboard.find("#photoCredit");
        const email = clonedEboard.find("#email");
        const resume = clonedEboard.find("#resume");
        const linkedin = clonedEboard.find("#linkedin");
        const positionBox = clonedEboard.find("#position");
        let nameText = eboardArray[k].name;
        let majorText = eboardArray[k].major;
        let imageUrl = eboardArray[k].image;
        let creditName = eboardArray[k].credit;
        let emailText = eboardArray[k].email;
        let resumeUrl = eboardArray[k].resume;
        let linkedinUrl = eboardArray[k].linkedin;
        let position = eboardArray[k].position;
        let eboard = eboardArray[k].eboard;
        name.text(nameText);
        major.text(majorText);
        positionBox.text(eboard);
        if(imageUrl){
            image.attr("src",imageUrl);
        }
        if(photoCredit){
            photoCredit.text(creditName);
        }
        if(emailText){
            email.click(function() {
                window.location.href = "mailto:" + emailText;
            });
        }
        if(!emailText){
            email.hide();
        }
        if(resumeUrl){
            resume.click(function() {
                window.location.href = resumeUrl;
            });
        }
        if(!resumeUrl){
            resume.hide();
        }
        if(linkedinUrl){
            linkedin.click(function() {
                window.location.href = linkedinUrl;
            });
        }
        if(!linkedinUrl){
            linkedin.hide();
        }
        if(!emailText && !resumeUrl && !linkedinUrl){
            name.css('margin-top','15px');
        }
        clonedEboardArray.push(clonedEboard);
    }
    eboardContainer.append(clonedEboardArray);
    eboardContainer.show();
    const clonedChairArray = [];
    for (let k = 0; k < chairArray.length; k++){
        const clonedChair = sampleChair.clone();
        clonedChair.css("opacity", "1");
        clonedChair.removeAttr("id");
        clonedChair.css("height","325px");
        clonedChair.show();
        const name = clonedChair.find("#name");
        const major = clonedChair.find("#major");
        const image = clonedChair.find("#memberPic")
        const photoCredit = clonedChair.find("#photoCredit");
        const email = clonedChair.find("#email");
        const resume = clonedChair.find("#resume");
        const linkedin = clonedChair.find("#linkedin");
        const positionBox = clonedChair.find("#position");
        let nameText = chairArray[k].name;
        let majorText = chairArray[k].major;
        let imageUrl = chairArray[k].image;
        let creditName = chairArray[k].credit;
        let emailText = chairArray[k].email;
        let resumeUrl = chairArray[k].resume;
        let linkedinUrl = chairArray[k].linkedin;
        let position = chairArray[k].position;
        let eboard = chairArray[k].eboard;
        name.text(nameText);
        major.text(majorText);
        positionBox.text(position);
        if(imageUrl){
            image.attr("src",imageUrl);
        }
        if(photoCredit){
            photoCredit.text(creditName);
        }
        if(emailText){
            email.click(function() {
                window.location.href = "mailto:" + emailText;
            });
        }
        if(!emailText){
            email.hide();
        }
        if(resumeUrl){
            resume.click(function() {
                window.location.href = resumeUrl;
            });
        }
        if(!resumeUrl){
            resume.hide();
        }
        if(linkedinUrl){
            linkedin.click(function() {
                window.location.href = linkedinUrl;
            });
        }
        if(!linkedinUrl){
            linkedin.hide();
        }
        if(!emailText && !resumeUrl && !linkedinUrl){
            name.css('margin-top','15px');
        }
        clonedChairArray.push(clonedChair);
    }
    chairContainer.append(clonedChairArray);
    chairContainer.show();
    cardContainer.show();
    $('#bodyText').show();
}
getData();
});
});