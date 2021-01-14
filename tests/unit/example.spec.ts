import { shallowMount } from "@vue/test-utils";
import HomeTopSection from "@/components/HomeTopSection.vue";

describe("HomeTopSection.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HomeTopSection, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
