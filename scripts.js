const slots=['first', 'second', 'third'];

const users=[
    {id:1, name: 'moe', slot: 'first'},
    {id:2, name: 'larry', slot: 'second'},
    {id:3, name: 'curly', slot: 'third'},
    {id:3, name: 'lucy', slot: 'third', selected: true},
];

const lists=document.querySelector('.lists');

const pleaserender=()=>{
    slots.forEach((slotsClass)=>{
        const newlist=document.querySelector(`${slotsClass}`);
        newlist.innerHTML='';
        if(slotsClass === users.slot){
            const tag=document.getElementById('tagResults');
            tag.innerHTML=`${users.name}`;
            tag.id=`${users.id}`;
            
            newlist.appendChild(tag);
        }
    })
}