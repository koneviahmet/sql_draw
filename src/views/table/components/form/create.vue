<template> 
  <div class="m-4">
    <form class="w-full max-w-sm">
      <div class="alert alert-error my-4" v-if="tableError">
        <div class="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">    
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>                      
          </svg> 
          <label>{{tableError}}</label>
        </div>
      </div>

      <!--form-->
        <div class="form-control">
          <label class="label">
            <span class="label-text">name</span>
          </label> 
          <input type="text" placeholder="name" v-model="name" class="input input-bordered">
          <label class="label">
            <span class="label-text-alt text-red-400">{{ errorName }}</span>
          </label>
        </div>
      <!--#form-->

      <!--add-->

      <div class="form-control mt-6">
        <a @click="save" class="btn btn-primary" :class="tableLoading && 'loading btn-disabled'">save</a>
      </div>
    </form>    
  </div>   
</template>


<script>

import useCreate from './createValidate';
import { useRouter } from "vue-router";
import useTable from '../../../../compositions/useModelTable'


export default {
    props: ["data"],
    setup(props){ 
        const {validate, errors, values} = useCreate();
        const router = useRouter();
        const {tableLoading, tableError, addTable} = useTable();
       
        
        const save = () => {
            validate().then(validateSuccess => {
                !validateSuccess.valid && console.log("Check the form.", errors.value) 
                if(validateSuccess.valid){
                    addTable({...props.data}).then(response => {
                      console.log("kaydedildi");
                        // router.push(`/table/detail/${response.id}`)
                    })
                }
            }).catch(validateError => {
                console.log(validateError);
            }) 
        }

        return {
            ...useCreate(),
            save,
            tableLoading,
            tableError
        }
    }
}
</script>