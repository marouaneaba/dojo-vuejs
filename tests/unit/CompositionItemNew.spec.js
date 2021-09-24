

import Composition from "@/app/compositionitem/container/Composition";
import {createLocalVue, shallowMount} from "@vue/test-utils";
import vuetify from "vuetify";
import CompositionItemNew from "@/app/compositionitem/components/composition-item-new/CompositionItemNew";

describe('Composition.vue', () => {
    let wrapper;
    let title = 'Weather App'
    beforeEach(()=>{
        const localVue = createLocalVue()
        localVue.use(vuetify)

        wrapper = shallowMount(CompositionItemNew, {
            localVue
        });
    })

    it('renders a vue instance', () => {
        expect(shallowMount(CompositionItemNew).isVueInstance()).toBe(true);
    });

    it('has an h1', ()=>{
        expect(wrapper.contains('h1')).toBe(true)
    })
    
})