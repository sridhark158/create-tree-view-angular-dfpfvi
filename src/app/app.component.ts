import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listChildChanged = [];
  arr = [
    {
      id: 'group_1',
      name: 'Group 1',
      items: [
        {
          id: 'group_1.abc',
          name: 'ABC',
          checked: false,
          expand: true,
          childs: [
            {
              id: 'group_1.abc.action_See_List',
              name: 'See List',
              checked: false,
              expand: true,
              childs: [
                {
                  id: 'group_1.abc.action_See_List.testo',
                  name: 'testo',
                  checked: false,
                },
              ],
            },
            {
              id: 'group_1.abc.action_Edit',
              name: 'Edit',
              checked: false,
            },
            {
              id: 'group_1.abc.action_Delete',
              name: 'Delete',
              checked: false,
            },
            {
              id: 'group_1.abc.action_Print',
              name: 'Print',
              checked: false,
            },
          ],
        },
        {
          id: 'group_1.def',
          name: 'DEF',
          checked: false,
          expand: true,
          childs: [
            {
              id: 'group_1.def.action_See_List',
              name: 'See List',
              checked: false,
            },
            {
              id: 'group_1.def.action_Edit',
              name: 'Edit',
              checked: false,
            },
            {
              id: 'group_1.def.action_Delete',
              name: 'Delete',
              checked: false,
            },
            {
              id: 'group_1.def.action_Print',
              name: 'Print',
              checked: false,
            },
          ],
        },
      ],
    },
    {
      id: 'group_2',
      name: 'Group 2',
      items: [
        {
          id: 'group_2.ghi',
          name: 'GHI',
          checked: false,
          expand: true,
          childs: [
            {
              id: 'group_2.ghi.action_See_List',
              name: 'See List',
              checked: false,
            },
            {
              id: 'group_2.ghi.action_Edit',
              name: 'Edit',
              checked: false,
            },
            {
              id: 'group_2.ghi.action_Delete',
              name: 'Delete',
              checked: false,
            },
          ],
        },
        {
          id: 'group_2.ijk',
          name: 'IJK',
          checked: true,
          expand: true,
          childs: [
            {
              id: 'group_2.ijk.action_Funny',
              name: 'Funny',
              checked: true,
            },
          ],
        },
      ],
    },
  ];

  checkMinusSquare(item) {
    const count = item.childs.filter((x) => x.checked == true).length;
    if (count > 0 && count < item.childs.length) {
      return true;
    } else if (count == 0) {
      return false;
    }
  }

  checkParent(group_i, i) {
    this.arr[group_i].items[i].checked = !this.arr[group_i].items[i].checked;
    if (this.arr[group_i].items[i].checked) {
      this.arr[group_i].items[i].childs.map((x) => (x.checked = true));
    } else {
      this.arr[group_i].items[i].childs.map((x) => (x.checked = false));
    }
    this.arr[group_i].items[i].childs.forEach((x) => {
      if (this.listChildChanged.findIndex((el) => el.id == x.id) == -1) {
        this.listChildChanged.push(x);
      }
    });
  }

  checkChild(group_i, parent_i, i) {
    this.arr[group_i].items[parent_i].childs[i].checked =
      !this.arr[group_i].items[parent_i].childs[i].checked;
    const count = this.arr[group_i].items[parent_i].childs.filter(
      (el) => el.checked == true
    ).length;
    if (count == this.arr[group_i].items[parent_i].childs.length) {
      this.arr[group_i].items[parent_i].checked = true;
    } else {
      this.arr[group_i].items[parent_i].checked = false;
    }
    if (
      this.listChildChanged.findIndex(
        (el) => el.id == this.arr[group_i].items[parent_i].childs[i].id
      ) == -1
    ) {
      this.listChildChanged.push(this.arr[group_i].items[parent_i].childs[i]);
    }
  }

  getListChildChanged() {
    console.log(this.listChildChanged);
  }
}
