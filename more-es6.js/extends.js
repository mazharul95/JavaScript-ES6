//syntactic sugar
class TeamMember {
    name;
    location;
    constructor(name,location){
        this.name = name;
        this.location =location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}

class Instructor extends TeamMember{
    designation ='web course Instructor';
    team = 'web team';
    constructor(name,location){
        super(name, location);
    }
    startSupportSession(time){
        console.log(`start the Support Session at ${time}`);
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`);
    }
}
class Developer extends TeamMember{
    designation ='web course Instructor';
    team = 'web team';
    tech;
    constructor(name,location, tech){
        super(name, location);
        this.tech = tech;
    }
    developmentFeature(feature){
        console.log(`please develop the ${feature}`);
    }
    release(version){
        console.log(`please release the ${version}`);
    }
}

class JobPlacement extends TeamMember{
    designation ='Job placement Commandos';
    team = 'web team';
    region;
    constructor(name,location,region){
        super(name, location);
        this.region = region;
    }
    provideResume(feature){
        console.log(`please develop the ${feature}`);
    }
    prepareStudent(version){
        console.log(`please release the ${version}`);
    }
}

const alia = new Developer('alia kabir', 'dhaka', 'React');
console.log(alia);
alia.provideFeedback();