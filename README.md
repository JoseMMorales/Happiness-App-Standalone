<div align="center">
  <img width="522" alt="standalone" src="https://user-images.githubusercontent.com/43299285/225273579-dd6cd13e-0361-4a4f-8d87-a95ac84866d1.PNG">
  
  ## **Angular Happiness - Standalone Components**
</div>

Happiness App is a Standalone Component based structure which will be able to show how to simplify the way of building Angular Apps. As these brand-new components are not part of any ng-module, all dependencies should be injected based on components' requirements directly onto them. Besides, we will be skyping any shared module in order to re-use our components, using barrels as a strategy when selecting a component and centralizing exports if at any point several modules come up.

To provide high standard designs, we've opted by choosing [Angular Material](https://material.angular.io/) for this project as it is very straight forward to use and consistent when develop any Angular Apps.

</br>

### **Standalone property and imports...**

**standalone: true** should be set up in any component to mark it as Standalone, as we mentioned above it will manage their own template dependencies using the import property

<div align="center">
<img width="380" alt="import" src="https://user-images.githubusercontent.com/43299285/225334068-f2ca4e05-a02e-4496-8e00-cbcdbcd46a84.PNG">
</div>

</br>

### **Snapshots...**

- Landing/Home page rendering the list of happy people, here we will see an icon in the toolbar where the user can enter details of happiness to update the table.

<div align="center">
  <img width="606" alt="Table" src="https://user-images.githubusercontent.com/43299285/225278880-fbe5aa3e-3f88-4172-9ed0-5eec99b5930d.PNG">
</div>

</br>

- Dialog Box is popping up when user clicks on the icon reflected in the snapshot above. Same fields will be rendered in both components(table/dialog).

<div align="center">
    <img width="612" alt="pop-up" src="https://user-images.githubusercontent.com/43299285/225279095-f32b0b1f-d701-4add-8b49-de9ee5954ebe.PNG">
  </div>

</br>

### **Angular Material presence...**

- `<mat-toolbar>` it's a component to set a title in the App and happy icon.
- `<mat-icon>` The user will open the Dialog box to add his/her data on the happiness table.
- `MatDialog` It's a component to render a pop-up box when user clicks heart icon in the toolbar.
- `<table mat-table>` Used to render/filter/sort happy people in the home view.
- `<mat-paginator>` It's retrieving just the data that is set up in the bottom side of the table.

* `<mat-card>` It's a component to organize person form fields when Dialog box is shown up.
* `<mat-spinner>` It's letting the user know about any action in the backend.

</br>

### **Project Structure...**

This structure is basically focus on modules(pages) and component, which are all spread out in the image below for a better understanding how are combining levels of the application.

<div align="center">
  <img width="234" alt="structure" src="https://user-images.githubusercontent.com/43299285/225313659-d0d09f4b-9bf0-4d1c-b9c9-7fc67ac9516c.PNG">
</div>

</br>

### **Barrels in use...**

An example how to export multiple data files in a single barrel:

- (1) Data files to be exported.
- (2) Barrel populated with both const files.

<div align="center">
  1. <img width="397" alt="files" src="https://user-images.githubusercontent.com/43299285/225318758-a544805f-061e-4e77-afe1-9a7348352fea.PNG">
  </br>
  </br>
  2. <img width="397" alt="barrels" src="https://user-images.githubusercontent.com/43299285/225318836-903c5f30-01a5-4288-8c99-3b96f715349a.PNG">
</div>

</br>

### **How to clone**

- `git clone https://github.com/JoseMMorales/Happiness-App-Standalone.git`
- `cd Happiness-App-Standalone`
- `code .` if using VSCode
- `npm install`
- `npm start` or `ng serve -o`

### **Technology...**

<b>angular</b>: "14.2.0"</br>
<b>rxjs</b>: "7.5.0"</br>
<b>typescript</b>: "4.7"</br>
<b>angular material</b>: "13.0"</br>
<b>jasmine</b>: "4.3"</br>
<b>Karma</b>: "5.1"</br>

### **Author**

JoseMMorales
