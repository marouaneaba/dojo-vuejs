

import Composition from "@/app/compositionitem/container/Composition";
import {createLocalVue, shallowMount} from "@vue/test-utils";
import vuetify from "vuetify";
import CompositionItemNavBar from "@/app/compositionitem/components/navbar/CompositionItemNavBar";
import CompositionItems from "@/app/compositionitem/components/list/container/CompositionItems";

describe('Composition.vue', () => {
    let wrapper;
    let title = 'Weather App'
    beforeEach(()=>{
        const localVue = createLocalVue()
        localVue.use(vuetify)

        wrapper = shallowMount(Composition, {
            localVue
        });
    })

    it('renders a vue instance', () => {
        expect(shallowMount(Composition).isVueInstance()).toBe(true);
    });

    it('has an composition item navbar', ()=>{
        expect(wrapper.contains(CompositionItemNavBar)).toBe(true)
    })

    it('has an composition item', ()=>{
        expect(wrapper.contains(CompositionItems)).toBe(true)
    })

    it('test event emitted from composition item navbar', ()=>{
        wrapper.find(CompositionItemNavBar).vm.$emit('fetchCompositionItems');
        expect(wrapper.find(CompositionItemNavBar).emitted().fetchCompositionItems).toBeTruthy()
    })

})