# from sentence_transformers import SentenceTransformer
# from sklearn.metrics.pairwise import cosine_similarity

# # Load the LaBSE model
# model = SentenceTransformer('sentence-transformers/LaBSE')

# # Example Hebrew sentences
# sentences = [
#     "תרופה ",  
#     "בננה",   
# ]

# # Generate embeddings
# embeddings = model.encode(sentences)

# # Print embeddings (optional, for inspection)
# # print("Embeddings:", embeddings)

# # Compute pairwise cosine similarity
# similarity_matrix = cosine_similarity(embeddings)

# # Print the similarity scores
# print("Cosine Similarity Matrix:")
# print(similarity_matrix)
