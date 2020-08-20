<template>
    <div class="card">
        <div 
            :class='{
                default: defaultStatus,
                checked: selected,
                disabled: disabled,
                selectedHover: selectedGood
            }'
            @click="switchStatus"
            @mouseleave="mouseLeave"
        >
            <div class="content">
                <div :class="{
                    preTitle: true,
                    selectedGood: selectedGood
                    }">
                    {{!selectedGood ? good.preTitle : 'Котэ не одобряет?  '}}
                </div>
                <div class="title">{{good.title}}</div>
                <div class="subTitle">{{good.subTitle}}</div>
                <div class="kit" v-for="item in good.kit" :key="good.kit.indexOf(item)">{{item}}</div>
            </div>
            <div 
                :class='{
                    ellipseDefault: defaultStatus && !selectedGood,
                    ellipseChecked: selected,
                    ellipseDisabled: disabled,
                    ellipseSelectedHover: selectedGood
                }'
            >
                <div class="innerWrapper">
                    <div class="mass">{{good.mass}}</div>
                    <div class="measure">{{good.measure}}</div>
                </div>
            </div>
        </div>
        <div class="description" v-if="good.status === 'default'">
            {{good.description.default}}<BuyBtn @buy="switchStatus" />
        </div>
        <div class="description" v-else-if="good.status === 'selected'">
            {{good.description.selected}}
        </div>
        <div class="description" v-else-if="good.status === 'disabled'">
            {{good.description.disabled}}
        </div>      
    </div>
</template>

<script>
import BuyBtn from '../components/BuyBtn'
import Good from '../models/good'

export default {
    components:{
        BuyBtn
    },
    props:{
        good: Object,
    },
    data: () => ({
        selectedGood: false,
    }),
    methods:{
        switchStatus(){
            let updGood = JSON.parse(JSON.stringify(this.good));
            if(this.good.status === 'default'){
                updGood.status = 'selected';
                    if(this.selectedGood){
                        this.selectedGood = false
                    }
                this.$store.dispatch('updateGood', updGood);
            } else if (this.good.status === 'selected'){
                updGood.status = 'default';
                this.selectedGood = true;
                this.$store.dispatch('updateGood', updGood);
            }
        },
        mouseLeave(){
            this.selectedGood = false;
        }
    },
    computed:{
        defaultStatus(){
            return this.good.status === 'default' ? true : false;
        },
        selected(){
            return this.good.status === 'selected' ? true : false;
        },
        disabled(){
            return this.good.status === 'disabled' ? true : false;
        },
    }
}
</script>

<style scoped>
.card{
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 20px;
}
.default{
    position: relative;
    background-image: url('../assets/card/backDefault.png');
    width: 320px;
    height: 480px;
    cursor: pointer;
}
.ellipseDefault{
    position: absolute;
    vertical-align: middle;
    text-align: center;
    bottom: 10px;
    right: 10px;
    width: 81px;
    height: 81px;
    background-image: url('../assets/card/ellipseDefault.png');
}
.default:hover .ellipseDefault{
    background-image: url('../assets/card/ellipseDefaultHover.png');
}
.checked{
    position: relative;
    background-image: url('../assets/card/backSelected.png'); 
    width: 320px;
    height: 480px;
    cursor: pointer;
}
.selectedHover{
    position: relative;
    background-image: url('../assets/card/backSelected.png'); 
    width: 320px;
    height: 480px;
    cursor: pointer; 
}
.ellipseChecked{
    position: absolute;
    vertical-align: middle;
    bottom: 10px;
    right: 10px;
    width: 81px;
    height: 81px;
    background-image: url('../assets/card/ellipseSelected.png');
}
.ellipseSelectedHover{
    position: absolute;
    vertical-align: middle;
    bottom: 10px;
    right: 10px;
    width: 81px;
    height: 81px;
    background-image: url('../assets/card/ellipseSelectedHover.png'); 
}
.disabled{
    position: relative;
    background-image: url('../assets/card/backDisabled.png'); 
    width: 320px;
    height: 480px;
    cursor: pointer;
}
.ellipseDisabled{
    position: absolute;
    vertical-align: middle;
    bottom: 10px;
    right: 10px;
    width: 81px;
    height: 81px;
    background-image: url('../assets/card/ellipseDisabled.png');
}
.content{
    text-align: left;
    position: absolute;
    left: 47px;
    top: 23px;
}
.preTitle {
    font-size: 16px;
    font-family: "trebuc";
    color: rgb(102, 102, 102);
    line-height: 1.2;
}
.selectedGood{
  color: rgb(230, 46, 122);
}

.title{
  font-size: 48px;
  font-family: "trebucbd";
  color: rgb(0, 0, 0);
  line-height: 1.2;
  text-align: left;
}
.subTitle{
  font-size: 24px;
  font-family: "trebucbd";
  color: rgb(0, 0, 0);
  line-height: 1.2;
  text-align: left;
  margin-bottom: 15px;
}

.kit {
  font-size: 14px;
  font-family: "trebucbd";
  color: rgb(102, 102, 102);
  line-height: 1.143;
  text-align: left;
}
.mass{
  font-size: 42px;
  font-family: "trebuc";
  color: rgb(255, 255, 255);
  text-align: center;
}
.measure{
  font-size: 16px;
  font-family: "trebuc";
  color: rgb(255, 255, 255);
  text-align: center;
}
.innerWrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 81px;
}
.description{
    margin-top: 15px;
    font-size: 13px;
    font-family: "trebuc";
    color: rgb(255, 255, 255);
    line-height: 1.231;
    text-align: center;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.004);
}
.buy{
    display: inline-block;
    border-bottom: #0c6c9c dashed;
    color: #0c6c9c;
}
</style>

