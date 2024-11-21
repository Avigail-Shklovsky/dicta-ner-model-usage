from transformers import AutoModel, AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained('dicta-il/dictabert-joint')
model = AutoModel.from_pretrained('dicta-il/dictabert-joint', trust_remote_code=True)

model.eval()

sentence = 'מצאתי שקית עם גרביים שרשום עליה כהן'
print(model.predict([sentence], tokenizer, output_style='json')) # see below for other return formats
