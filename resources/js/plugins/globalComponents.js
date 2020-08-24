import Badge from "../components/Comman/Badge";
import BaseAlert from "../components/Comman/BaseAlert";
import BaseButton from "../components/Comman/BaseButton";
import BaseCheckbox from "../components/Comman/BaseCheckbox";
import BaseInput from "../components/Comman/BaseInput";
import BaseDropdown from "../components/Comman/BaseDropdown";
import BaseNav from "../components/Comman/BaseNav";
import BasePagination from "../components/Comman/BasePagination";
import BaseProgress from "../components/Comman/BaseProgress";
import BaseRadio from "../components/Comman/BaseRadio";
import BaseSlider from "../components/Comman/BaseSlider";
import BaseSwitch from "../components/Comman/BaseSwitch";
import BaseTable from "../components/Comman/BaseTable";
import BaseHeader from "../components/Comman/BaseHeader";
import Card from "../components/Comman/Card";
import StatsCard from "../components/Comman/StatsCard";
import Modal from "../components/Comman/Modal";
import TabPane from "../components/Comman/Tabs/TabPane";
import Tabs from "../components/Comman/Tabs/Tabs";

export default {
    install(Vue) {
        Vue.component(Badge.name, Badge);
        Vue.component(BaseAlert.name, BaseAlert);
        Vue.component(BaseButton.name, BaseButton);
        Vue.component(BaseInput.name, BaseInput);
        Vue.component(BaseNav.name, BaseNav);
        Vue.component(BaseDropdown.name, BaseDropdown);
        Vue.component(BaseCheckbox.name, BaseCheckbox);
        Vue.component(BasePagination.name, BasePagination);
        Vue.component(BaseProgress.name, BaseProgress);
        Vue.component(BaseRadio.name, BaseRadio);
        Vue.component(BaseSlider.name, BaseSlider);
        Vue.component(BaseSwitch.name, BaseSwitch);
        Vue.component(BaseTable.name, BaseTable);
        Vue.component(BaseHeader.name, BaseHeader);
        Vue.component(Card.name, Card);
        Vue.component(StatsCard.name, StatsCard);
        Vue.component(Modal.name, Modal);
        Vue.component(TabPane.name, TabPane);
        Vue.component(Tabs.name, Tabs);
    }
};
