import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler


df = pd.read_csv("./Medicaldataset.csv")



X = df.drop('Result', axis=1)
y = df['Result']


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)



scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)



from sklearn.linear_model import LogisticRegression



model = LogisticRegression()
model.fit(X_train_scaled, y_train)



accuracy = model.score(X_test_scaled, y_test)
print("Accuracy:", accuracy)


new_data = {
    'Age': [40],
    'Gender': [0],
    'Heart rate': [70],
    'Systolic blood pressure': [120],
    'Diastolic blood pressure': [80],
    'Blood sugar': [150],
    'CK-MB': [2.0],
    'Troponin': [0.02],
}

new_df = pd.DataFrame(new_data)
new_df_scaled = scaler.transform(new_df)

prediction = model.predict(new_df_scaled)
print("Prediction:", prediction)